# Study of L293D Motor Driver Datasheet



## 1. Introduction

In modern electronics, microcontrollers like the Arduino operate at low voltage
and current levels. While they are excellent at processing logic and sending
signals, they cannot directly drive high-power devices like DC motors. This is
where a motor driver IC like the **L293D** becomes essential.

The L293D is a dual H-Bridge motor driver integrated circuit manufactured by
Texas Instruments. It can control **two DC motors simultaneously** or **one
stepper motor**. It acts as a bridge between the low-power control signals from
a microcontroller and the high-power requirements of a motor.

---

## 2. H-Bridge — The Core of L293D

The H-Bridge is the fundamental building block inside the L293D...

![H-Bridge Diagram](https://www.electronics-tutorials.ws/wp-content/uploads/2018/05/io-io40.gif)

### How it controls direction:

| S1  | S2  | S3  | S4  | Motor Action    |
|-----|-----|-----|-----|-----------------|
| ON  | OFF | OFF | ON  | Spins Forward   |
| OFF | ON  | ON  | OFF | Spins Backward  |
| OFF | OFF | OFF | OFF | Motor Stops     |

By opening and closing different combinations of switches, the H-Bridge allows
current to flow in **both directions** through the motor — giving us forward
and reverse control.

The L293D contains **two H-Bridges**, allowing it to control two motors
independently.

---

## 3. PWM — Speed Control

**PWM stands for Pulse Width Modulation.** It is a technique used to control
the speed of a motor by rapidly switching the power supply ON and OFF.

The key concept is **Duty Cycle** — the percentage of time the signal stays
HIGH (ON) in one cycle.

- **100% Duty Cycle** → Full Speed
- **50% Duty Cycle** → Half Speed
- **25% Duty Cycle** → Quarter Speed

Higher duty cycle = more average voltage = faster motor
Lower duty cycle = less average voltage = slower motor

The Arduino sends a PWM signal to the **Enable pin** of the L293D to control
motor speed. In Arduino code this is done using `analogWrite()` with values
from **0 (stop)** to **255 (full speed)**.

---

## 4. Pin Description

The L293D is a **16-pin DIP IC**. Here is the complete pin layout:

![L293D Pin Diagram](https://components101.com/sites/default/files/component_pin/L293D-Pinout.png)


 | Pin  | Name | Description                                      |
|------|------|--------------------------------------------------|
| 1    | EN1  | Enable pin for Motor 1 — PWM signal for speed    |
| 2    | A1   | Input 1 for Motor 1 — direction control          |
| 3    | Y1   | Output 1 — connects to Motor 1 terminal          |
| 4, 5 | GND  | Ground — also acts as heat sink                  |
| 6    | Y2   | Output 2 — connects to Motor 1 terminal          |
| 7    | A2   | Input 2 for Motor 1 — direction control          |
| 8    | VCC2 | Motor supply voltage (4.5V to 36V)               |
| 9    | EN2  | Enable pin for Motor 2                           |
| 10   | A3   | Input 1 for Motor 2                              |
| 11   | Y3   | Output 3 — connects to Motor 2 terminal          |
| 12,13| GND  | Ground                                           |
| 14   | Y4   | Output 4 — connects to Motor 2 terminal          |
| 15   | A4   | Input 2 for Motor 2                              |
| 16   | VCC1 | Logic supply voltage (5V from Arduino)           |

---

## 5. Key Electrical Specifications

| Parameter              | Value              |
|------------------------|--------------------|
| Supply Voltage (VCC1)  | 5V                 |
| Motor Supply (VCC2)    | 4.5V to 36V        |
| Output Current         | 600mA continuous   |
| Peak Output Current    | 1.2A               |
| Number of H-Bridges    | 2                  |
| Operating Temperature  | 0°C to 70°C        |

---

## 6. Protection Diodes

The L293D has **built-in flyback protection diodes** (freewheeling diodes).
When a motor suddenly stops, it generates a reverse voltage spike called
**back EMF**. This can damage the IC and the microcontroller. The built-in
diodes safely redirect this voltage to ground, protecting the circuit.

---

## 7. Applications

- **DC Motor Control** — controlling speed and direction in robots
- **Stepper Motor Control** — precise positioning in 3D printers and CNC machines
- **Robotics** — driving wheels of autonomous robots
- **Conveyor Systems** — industrial motor control
- **Home Automation** — controlling fans, pumps, and actuators

---

## 8. Conclusion

The L293D is a versatile and beginner-friendly motor driver IC. Its built-in
dual H-Bridge design allows bidirectional control of two DC motors
simultaneously. The use of PWM signals through the Enable pins makes speed
control straightforward when interfaced with microcontrollers like Arduino.
The built-in protection diodes make it robust and safe for practical use.
Understanding the L293D is fundamental for anyone working in robotics and
embedded systems.

---

*Report by: Prajwal Dhannur*