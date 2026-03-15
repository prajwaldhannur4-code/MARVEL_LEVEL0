# Task 10 - Speed Control of DC Motor


## What is a DC Motor?

A DC motor is an electrical machine that converts electrical energy into
rotational mechanical energy. It runs on direct current (DC) and is widely
used in robots, fans, toys and conveyor systems. The speed of a DC motor
can be controlled by varying the voltage or current supplied to it.

---

## What is the L298N Motor Driver?

The L298N is a motor driver module that acts as a bridge between a
microcontroller like Arduino and a DC motor. Arduino pins cannot supply
enough current to directly run a motor — the L298N solves this by taking
the low power control signal from Arduino and using it to control a higher
power supply to the motor.

It uses **PWM (Pulse Width Modulation)** signals from Arduino to control
the speed of the motor. Higher PWM value = more average voltage = faster
motor.

---

## What is PWM?

PWM stands for Pulse Width Modulation. It is a technique where the power
is rapidly switched ON and OFF to control the average voltage delivered
to the motor:

- **255 PWM** = fully ON = full speed
- **128 PWM** = half ON = half speed
- **0 PWM** = fully OFF = motor stops

---

## What is a Potentiometer?

A potentiometer is a variable resistor with a rotating knob. When you
rotate the knob it changes the resistance which changes the voltage
reading. In this task it was used to manually control the motor speed
by rotating the knob up and down.

---

## Circuit Connections

| L298N | Arduino |
|---|---|
| IN1 | Pin 8 |
| IN2 | Pin 9 |
| ENA | Pin 10 (PWM) |
| GND | GND |
| 5V | 5V |

| L298N | Motor |
|---|---|
| OUT1 | Motor wire 1 |
| OUT2 | Motor wire 2 |

- Potentiometer connected to Arduino analog pin A0
- 9V power supply connected to L298N power input

---

## What I Did

1. Connected the L298N motor driver to the Arduino UNO
2. Connected the BO motor to the output pins of L298N
3. Connected a potentiometer to analog pin A0 of Arduino
4. Connected the power supply — motor started spinning when
voltage was increased above 7V
5. Uploaded the Arduino code
6. Rotated the potentiometer knob up and down — the motor speed
was fully in my control!

---

## Outcome

- Motor spun forward at different speeds based on potentiometer position
- Rotating potentiometer up = motor spins faster
- Rotating potentiometer down = motor slows down or stops
- Successfully demonstrated PWM based speed control

---

## What I Learned

- How the L298N motor driver works
- What PWM is and how it controls motor speed
- How a potentiometer can be used as a manual speed controller
- How to interface Arduino with a motor driver
- Why motors need a driver IC and cannot be connected directly to Arduino

---

## Pics

🎥 [DC Motor Speed Control Video](pics/speed control of dc motor.mp4)

---

## Conclusion

Through this task I learned how to control the speed of a DC motor using
an L298N motor driver and Arduino. The potentiometer gave me real time
manual control over the motor speed. This is a fundamental concept used
in robotics, electric vehicles and industrial automation where precise
motor control is essential.

---

*Report by: Prajwal Dhannur*
