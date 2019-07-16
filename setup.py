import glob
import os
import os.path as path
import shutil

from setuptools import Command, setup

here = path.abspath(path.dirname(__file__))

SUNGEAR_STATIC_PATH = path.join(here, 'sungear', 'static')


class Webpack(Command):
    description = "build web assets"
    user_options = []

    def initialize_options(self):
        pass

    def finalize_options(self):
        pass

    def run(self):
        import subprocess
        subprocess.run(["npm", "install"], cwd=path.join(here, 'sungear_react'), check=True)
        subprocess.run(["npm", "run", "build"], cwd=path.join(here, 'sungear_react'), check=True)

        os.makedirs(SUNGEAR_STATIC_PATH, exist_ok=True)

        for p in glob.glob(os.path.join(SUNGEAR_STATIC_PATH, '*')):
            os.remove(p)

        for p in glob.glob(os.path.join(here, 'sungear_react', 'dist', '*')):
            if p.endswith('report.html'):
                continue
            shutil.copy(p, SUNGEAR_STATIC_PATH)


with open(path.join(here, 'README.md'), encoding='utf-8') as f:
    long_description = f.read()

setup(
    name='sungear',
    version='1.0.15',
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
    },
    cmdclass={
        'webpack': Webpack
    }
)
