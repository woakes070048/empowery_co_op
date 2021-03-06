# -*- coding: utf-8 -*-
from setuptools import setup, find_packages
#from pip.req import parse_requirements
import re, ast

# get version from __version__ variable in empowery_co_op/__init__.py
_version_re = re.compile(r'__version__\s+=\s+(.*)')

with open('requirements.txt') as f:
	install_requires = f.read().strip().split('\n')

with open('empowery_co_op/__init__.py', 'rb') as f:
    version = str(ast.literal_eval(_version_re.search(
        f.read().decode('utf-8')).group(1)))

#requirements = parse_requirements("requirements.txt", session="")

setup(
	name='empowery_co_op',
	version=version,
	description='Empowery co-op membership program',
	author='GreyCube Technologies',
	author_email='admin@greycube.in',
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
