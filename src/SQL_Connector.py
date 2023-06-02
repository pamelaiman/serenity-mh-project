import mysql.connector
from SQL_Config import USER, PASSWORD, HOST


class DatabaseConnectionError(Exception):
    pass

def connect_to_database(database_name):
    connection = mysql.connector.connect(
        host=HOST,
        user=USER,
        password=PASSWORD,
        auth_plugin='mysql_native_password',
        database=database_name)
    return connection

def register_account(email, password):
    try:
        database_name = 'Serenity'
        database_connection = connect_to_database(database_name)
        cursor = database_connection.cursor()
        print(f"Connected to database: {database_name}")
        
        checking_query = """
        SELECT COUNT(*) FROM Accounts
        WHERE Email = %s;
        """
        cursor.execute(checking_query, (email,))
        count = cursor.fetchone()[0]
        if count > 0:
            return 'Email already exists.'
        
        insert_query = """
        INSERT INTO Accounts (Email, Password)
        VALUES (%s, %s);
        """
        values = (email, password)
        
        cursor.execute(insert_query, values)

        update_profile_query = """
        INSERT INTO Profile (Email)
        VALUES (%s);
        """
        cursor.execute(update_profile_query, (email,))
        database_connection.commit()
        cursor.close()

        return 'Registration successful'

    except Exception as error:
        print("Error while connecting to MySQL", error)
        raise DatabaseConnectionError("Failed to register account")
    finally:
        if database_connection:
            database_connection.close()
            print("Registration attemp complete. Database connection is closed.")

def logging_in(email, password):
    try:
        database_name = 'Serenity'
        database_connection = connect_to_database(database_name)
        cursor = database_connection.cursor()
        print(f"Connected to database: {database_name}")

        query = """
        SELECT Email, Password
        FROM Accounts
        WHERE Email = %s AND Password = %s;"""
        cursor.execute(query, (email, password))
        result = cursor.fetchone()
        cursor.close()
        print('Result:', result)
        if result is not None and result[0] == email and result[1] == password:
            return 'Login successful'
        else:
            return 'Invalid email or password. Please try again.'


    except Exception:
        raise DatabaseConnectionError("Failed to log in successfully")
    finally:
        if database_connection:
            database_connection.close()
            print("Login attempt complete. Database connection is closed")

def get_account(email):
    try:
        database_name = 'Serenity'
        database_connection = connect_to_database(database_name)
        cursor = database_connection.cursor()
        print(f"Connected to database: {database_name}")

        query = """
        SELECT p.Email, p.Title, p.Pages
        FROM Profile p
        INNER JOIN Books b ON p.Title = b.Title
        WHERE p.email = %s;
        """

        cursor.execute(query, (email,))
        result = cursor.fetchall()

        account_data = {
            'Email' : email,
            'Books': []
        }

        for row in result:
            book = {
                'Title': row[1],
                'Pages': row[2]
            }
            account_data['Books'].append(book)
        cursor.close()
        return account_data

    except Exception:
        raise DatabaseConnectionError("Failed to get account from database")

    finally:
        if database_connection:
            database_connection.close()
            print("Account search attempt complete. Database connection is closed")

def adding_book(email, title, pages):
    try:
        database_name = 'Serenity'
        database_connection = connect_to_database(database_name)
        cursor = database_connection.cursor()
        print(f"Connected to database: {database_name}")

        checking_query = """
        SELECT * FROM Profile
        WHERE Email = %s 
        AND Title = %s"""
        cursor.execute(checking_query, (email, title))
        result = cursor.fetchone()

        if result is None:
            query = "INSERT INTO Profile (Email, Title, Pages) VALUES (%s, %s, %s)"
            cursor.execute(query, (email, title, pages))
            database_connection.commit()
            print('Book added to account')
            return 'Book added to account'
        else:
            return 'You have already added this book to your account'
    except Exception as error:
        print('Error adding book to account', str(error))
        raise DatabaseConnectionError("Failed to add book to account")

    finally:
        if database_connection:
            database_connection.close()
            print("Adding book attempt complete. Database connection is closed")

def sql_connector():
    return {
        "register_account": register_account,
        "logging_in": logging_in,
        "get_account": get_account,
        "adding_book": adding_book}