import os
import json
import pathlib

# Limpiar la consola
os.system('cls' if os.name == 'nt' else 'clear')

class CreateJSON:
    def __init__(self, path):
        self.path = pathlib.Path(path)
        self.dataImages = self.generateDataImages()
        # print(self.dataImages)

    def generateDataImages(self):
        # Esta función genera el diccionario de carpetas e imágenes
        data = {}
        for folder in self.readFolders():
            images = self.readImagesForFolder(folder)
            data[folder] = images
        return data

    def readFolders(self):
        # Esta función lee exclusivamente las carpetas en el directorio
        return [f.name for f in self.path.iterdir() if f.is_dir()]

    def readImagesForFolder(self, folder):
        # Esta función lee los archivos dentro de una carpeta
        folder_path = self.path / folder
        return [f.name for f in folder_path.iterdir() if f.is_file()]
    def saveJSON(self):
        # Esta función guarda el archivo JSON
        with open(self.path / 'dataImages.json', 'w') as file:
            json.dump(self.dataImages, file, indent=4)
        print('Archivo JSON guardado correctamente.')


# Asegúrate de usar __file__ correctamente
if '__file__' in globals():
    path = pathlib.Path(__file__).parent.absolute()
else:
    path = pathlib.Path().absolute()

createJSON = CreateJSON(path)
createJSON.saveJSON()

