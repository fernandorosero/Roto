from sys import argv

script, posicion = argv

import RPi.GPIO as GPIO    #Importamos la libreria RPi.GPIO
import time                #Importamos time para poder usar time.sleep

GPIO.setmode(GPIO.BCM)   #Ponemos la Raspberry en modo BOARD
GPIO.setup(20,GPIO.OUT)    #Ponemos el pin 21 como salida
p = GPIO.PWM(20,50)        #Ponemos el pin 21 en modo PWM y enviamos 50 pulsos $
p.start(posicion)               #Enviamos un pulso del 7.5% para centrar el servo

#p.ChangeDutyCycle(posicion)    #Enviamos un pulso del 2.8% para subir el ser$
#time.sleep(0.5)           #pausa de medio segundo
        

print "empieza";
p.stop()                      #Detenemos el servo
GPIO.cleanup()                #Limpiamos los pines GPIO de la Raspberry y cerramos el s$

