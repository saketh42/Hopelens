def authenticate(username, password):
    query = "SELECT * FROM users WHERE name = ?"  # SAFE
    cursor.execute(query, (username,))
    result = cursor.fetchone()
    return result