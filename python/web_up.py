import RPi.GPIO as GPIO    #Importamos la libreria RPi.GPIO
import time                #Importamos time para poder usar time.sleep

GPIO.setmode(GPIO.BCM)   #Ponemos la Raspberry en modo BOARD
GPIO.setup(20,GPIO.OUT)    #Ponemos el pin 21 como salida
p = GPIO.PWM(20,50)        #Ponemos el pin 21 en modo PWM y enviamos 50 pulsos $
p.start(7.5)               #Enviamos un pulso del 7.5% para centrar el servo
print "empieza";
try:
    while True:      #iniciamos un loop infinito

        p.ChangeDutyCycle(2.8)    #Enviamos un pulso del 2.8% para subir el ser$
        time.sleep(0.5)           #pausa de medio segundo
        p.ChangeDutyCycle(3.5)   #Enviamos un pulso del 3.5% para budir el se$
        time.sleep(0.5)           #pausa de medio segundo
        p.ChangeDutyCycle(5.0)    #Enviamos un pulso del 5.0% para centrar el s$
        time.sleep(0.5)           #pausa de medio segundo

except KeyboardInterrupt:         #Si el usuario pulsa CONTROL+C entonces...
    p.stop()                      #Detenemos el servo
    GPIO.cleanup()                #Limpiamos los pines GPIO de la Raspberry y cerramos el s$
