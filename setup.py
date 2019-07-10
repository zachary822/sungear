import os.path as path

from setuptools import setup

here = path.abspath(path.dirname(__file__))

with open(path.join(here, 'README.md'), encoding='utf-8') as f:
    long_description = f.read()

setup(
    name='sungear',
    version='1.0.3',
    description='Web based Sungear visualization.',
    long_description=long_description,
    long_description_content_type='text/markdown',
    author='Zachary Juang',
    author_email='zacharyjuang+sungear@gmail.com',
    url='https://github.com/zachary822/sungear',
    classifiers=[
        'Development Status :: 3 - Alpha',
        'License :: OSI Approved :: MIT License',
        'Programming Language :: Python :: 3.6',
        'Programming Language :: Python :: 3.7',
    ],
    packages=['sungear'],
    package_data={
        'sungear': ['static/*'],
        '': ['LICENSE']
    },
    python_requires='>=3.6',
    install_requires=[
        'numpy',
        'pandas',
        'scikit-learn'
    ],
    extras_require={
        'web': ['flask']
    },
    project_urls={
        'Bug Reports': 'https://github.com/zachary822/sungear/issues'
    }
)
