# Task 14 - Karnaugh Maps and Burglar Alarm


## What is a Karnaugh Map?

A Karnaugh Map (K-Map) is a visual method used to simplify Boolean
algebra expressions. Instead of using complex Boolean algebra rules,
K-Maps allow us to simplify logic expressions by grouping 1s together
in a grid. This gives us the simplest possible logic circuit.

---

## Problem Statement

Design a burglar alarm system based on two inputs:
- **D** — Door (0 = closed, 1 = open)
- **K** — Key (0 = not pressed, 1 = pressed)

The alarm should trigger only when the door is open AND the key
is not pressed — meaning a burglar has opened the door without a key!

---

## Truth Table

| Door (D) | Key (K) | Alarm (A) | Condition |
|---|---|---|---|
| 0 | 0 | 0 | Door closed, no alarm |
| 0 | 1 | 0 | Door closed, no alarm |
| 1 | 0 | 1 | Door open, no key = ALARM! |
| 1 | 1 | 0 | Door open with key, no alarm |

---

## K-Map
```
         K=0      K=1
       +--------+--------+
D=0   |   0    |   0    |
       +--------+--------+
D=1   |   1    |   0    |
       +--------+--------+
```

**Grouping the 1s:**
The single 1 in cell (D=1, K=0) gives us:
```
Alarm = D AND (NOT K)
Alarm = D · K'
```

---

## Logic Circuit
```
Door (D) ────────────────── AND gate ──── Buzzer/LED
                                 |
Key (K) ──── NOT gate ───────────
```

- Door input goes directly into AND gate
- Key input passes through NOT gate first
- Both connect to AND gate
- Output of AND gate triggers the buzzer/LED

---

## Circuit Components

| Component | Purpose |
|---|---|
| Arduino UNO | Microcontroller |
| Push Button 1 | Simulates Door (open/closed) |
| Push Button 2 | Simulates Key (pressed/not pressed) |
| LED / Buzzer | Alarm output |
| 330Ω Resistor | Current limiting for LED |
| Breadboard | Circuit assembly |

---

## Circuit Connections

| Component | Arduino Pin |
|---|---|
| Door Button | Pin 7 |
| Key Button | Pin 8 |
| LED/Buzzer | Pin 13 |
| All GND | GND |

---

## Arduino Code
```cpp
int door = 7;
int key = 8;
int alarm = 13;

void setup() {
  pinMode(door, INPUT);
  pinMode(key, INPUT);
  pinMode(alarm, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  int d = digitalRead(door);
  int k = digitalRead(key);

  // Alarm = Door open AND Key NOT pressed
  if (d == HIGH && k == LOW) {
    digitalWrite(alarm, HIGH);
    Serial.println("ALARM! Burglar detected!");
  } else {
    digitalWrite(alarm, LOW);
    Serial.println("Safe.");
  }
  delay(100);
}
```

---

## How it Works

- Press Door button only → **ALARM triggers** (burglar!)
- Press Key button only → No alarm
- Press both buttons → No alarm (owner entering with key)
- Press neither → No alarm (door closed)

---

## What I Learned

- What a Karnaugh Map is and how to use it
- How to derive Boolean expressions from K-Maps
- How logic gates implement Boolean expressions
- How to build a simple burglar alarm circuit
- How Arduino implements logic gate behavior in code

---

## Pics

![K-Map drawn on paper](pics/task14_kmap.jpg)
![Burglar Alarm Circuit](pics/task14_circuit.jpg)

---

## Conclusion

Through this task I learned how K-Maps simplify Boolean expressions
into minimal logic circuits. The burglar alarm uses a simple AND gate
with a NOT gate to detect when a door is open without a key. This is
a fundamental concept in digital electronics used in real security
systems. Building it on hardware made the concept very clear and
practical.

---

*Report by: Prajwal Dhannur*