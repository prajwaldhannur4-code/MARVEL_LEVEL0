# Task 9 - Tinkercad Simulation


## What is Tinkercad?

Tinkercad is a free online simulation software made by Autodesk. It allows
you to design 3D models and also simulate electronic circuits with Arduino
without needing any physical hardware. It is a great tool for beginners to
learn electronics safely and for free in a browser.

---

## What is an Ultrasonic Sensor?

An ultrasonic sensor measures distance using high frequency sound waves —
similar to how bats navigate in the dark. It works in two steps:

- **Trigger** — The sensor sends out a burst of ultrasonic sound waves
- **Echo** — It waits for the sound to bounce back from an object

The time taken for the sound to return is used to calculate the distance
using this formula:
```
Distance = (Duration × Speed of Sound) / 2
         = Duration × 0.034 / 2
```

We divide by 2 because the sound travels to the object AND back.

---

## Circuit 1 — Ultrasonic Distance Sensor

### Components Used:
- Arduino UNO
- Ultrasonic Sensor (HC-SR04 style, single SIG pin)
- Jumper wires

### What it does:
The circuit continuously measures the distance between the sensor and any
object in front of it. The distance is displayed in real time on the Serial
Monitor in centimeters.

### Serial Monitor Output:
```
Distance: 78 cm
Distance: 78 cm
Distance: 79 cm
Distance: 81 cm
Distance: 81 cm
```

### Code Logic:
- Pin 9 is used as both trigger and echo using pinMode switching
- `digitalWrite HIGH` for 10 microseconds sends the ultrasonic pulse
- `pulseIn` measures how long the echo takes to return
- Distance is calculated and printed every 500ms

---

## Circuit 2 — Radar System

### Components Used:
- Arduino UNO
- Ultrasonic Sensor
- Servo Motor
- Jumper wires

### What it does:
The servo motor rotates from 0° to 180° and back continuously. At every
angle the ultrasonic sensor measures the distance to any object in that
direction. The angle and distance are both printed on the Serial Monitor
giving a radar-like scanning effect.

### Serial Monitor Output:
```
Angle: 0  | Distance: 45 cm
Angle: 10 | Distance: 43 cm
Angle: 20 | Distance: 38 cm
...
Angle: 180 | Distance: 92 cm
```

### What is a Servo Motor?
A servo motor is a motor that can rotate to a precise angle. Unlike a normal
DC motor that just spins, a servo can be told to go to exactly 45° or 90°
or any angle between 0° and 180°. This makes it perfect for the radar
scanning system.

---

## What I Learned

- How Tinkercad works for circuit simulation without physical hardware
- How ultrasonic sensors measure distance using sound waves
- How servo motors rotate to precise angles
- How to write and understand basic Arduino code
- How Serial Monitor is used to display sensor data in real time
- The formula: `Distance = Duration × 0.034 / 2`

---

## Pics

![Circuit 1 - Ultrasonic Distance Sensor](pics/tinkercad_circuit1.png)
![Circuit 2 - Radar System](pics/tinkercad_circuit2.png)

---

## Conclusion

Through this task I learned how to simulate real electronic circuits using
Tinkercad. Circuit 1 showed how an ultrasonic sensor can detect distance
and display it on the Serial Monitor. Circuit 2 combined the sensor with a
servo motor to create a simple radar system that scans 180 degrees. These
simulations gave me a strong foundation for building real hardware circuits.

---

*Report by: Prajwal Dhannur*