#poetry init -n
#poetry add python

from dotenv import dotenv_values, load_dotenv

#Example 1
environment_variables = dotenv_values()
print(environment_variables)

#Example2
import os

load_dotenv()
print(os.getenv(("MYSQL_PASSWORD")))
