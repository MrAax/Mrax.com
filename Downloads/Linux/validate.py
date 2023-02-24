#python -m pip install --upgrade pip
#pip install cryptography
from cryptography.fernet import Fernet
key = Fernet.generate_key()
cript = Fernet(key)

def encryptFun():
    with open('validate.txt', 'rb+') as file:
        data = file.readline()
        en_text = cript.encrypt(data)
        file.write(en_text)
        file.close()
    
def decryptFun():
    with open('validate.txt', 'rb+') as file:
        data = file.readline()
        de_text = cript.decrypt(data)
        file.write(de_text)
        file.close()
    
def expirApp():
    print('Your tryle period is expired')

def mainFun():
    decryptFun()
    with open('validate.txt', 'r+') as file:
        data = file.readline()
        try:
            if((int(data)<=3) and (int(data)>0)):
                file.seek(0)
                file.write(str(int(data)-1))
                file.close()
                encryptFun()
            else:
                expirApp()
        except ValueError:
            expirApp()

if __name__ == '__main__':
    mainFun()
    
