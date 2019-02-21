"""Test data registration"""
valid_register_data = {
        'email': 'abc@abcd.com',
        'username': 'abc123nn',
        'password': 'ia83naJS'

}

register_short_password = {

        'email': 'abc@abc.com',
        'username': 'abc123',
        'password': 'gsh'

}

register_invalid_password = {
        'email': 'abc@abc.com',
        'username': 'abc123',
        'password': 'gsh/sd]sd'

}

register_no_email = {

        'username': 'abc123',
        'password': 'gsh'

}

register_no_username = {

        'email': 'abc@abc.com',
        'password': 'gsh'

}

register_no_username_password_email = {

}

register_no_password = {
        'email': 'abc@abc.com',
        'username': 'abc123'
    }


register_invalid_email = {

        'email': 'abc.com',
        'username': 'abc123',
        'password': 'ia83naJS'

}

