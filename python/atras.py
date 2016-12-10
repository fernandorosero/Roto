import RPi.GPIO as GPIO
import time

# Variables
delay = 0.0055
steps = 500

GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)

# Habilitado pines GPIO para ENA y ENB para velocidad
ENA = 18  #ENA
ENB = 22  #ENB

# HAbilito los pines para IN1-4 para el control de los motores
IN1 = 23  #GPIO-23
IN2 = 24  #GPIO-24
IN3 = 4   #GPIO-4
IN4 = 17  #GPIO-17

#tiempoAceleracion = 0.6;

# Set estado de los pines
GPIO.setup(ENA, GPIO.OUT)
GPIO.setup(ENB, GPIO.OUT)
GPIO.setup(IN1, GPIO.OUT)
GPIO.setup(IN2, GPIO.OUT)
GPIO.setup(IN3, GPIO.OUT)
GPIO.setup(IN4, GPIO.OUT)

# Set ENA y ENB to high to enable stepper
GPIO.output(ENA, True)
GPIO.output(ENB, True)

print "Atras";
GPIO.output(IN1, GPIO.HIGH)
GPIO.output(IN2, GPIO.LOW)
GPIO.output(IN3, GPIO.HIGH)
GPIO.output(IN4, GPIO.LOW)
time.sleep(tiempoAceleracion)

GPIO.cleanup();
