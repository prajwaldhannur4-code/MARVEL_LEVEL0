# Task 11 - LED Toggle Using ESP32


## What is ESP32?

ESP32 is a microcontroller that is more powerful than Arduino. It is widely
used for more complex projects because it has built in WiFi and Bluetooth
capabilities which Arduino UNO does not have. This makes ESP32 perfect for
IoT (Internet of Things) projects where devices need to connect to the
internet or a local network.

Key advantages of ESP32 over Arduino:
- Built in **WiFi** — can connect to internet or create its own web server
- Built in **Bluetooth** — can communicate with phones and other devices
- Faster processor and more memory
- More GPIO pins available
- Used in smart home devices, IoT sensors and wireless projects

---

## What is a Web Server?

A web server is a program that serves web pages to devices that request
them. In this task the ESP32 itself acts as a tiny web server. When
connected to the same WiFi network, any device (phone or laptop) can
open the ESP32's IP address in a browser and see a webpage hosted by
the ESP32 itself — no internet required!

---

## Circuit Connections

| Component | ESP32 Pin |
|---|---|
| LED positive | GPIO Pin 26 |
| Resistor | In series with LED |
| LED negative | GND |

A 330Ω resistor was connected in series with the LED to limit current
and protect both the LED and the ESP32 pin.

---

## What I Did

1. Connected LED and resistor to ESP32 GPIO pin
2. Opened Arduino IDE and configured it for ESP32
3. Uploaded the web server code to ESP32
4. ESP32 connected to WiFi and generated an **IP address**
5. Opened the IP address in a browser on my phone/laptop
6. Got a webpage with **ON and OFF buttons**
7. Clicking ON turned the LED on — clicking OFF turned it off
8. Had full control over the LED from the browser! 🎉

---

## How it Works
```
Phone/Laptop Browser
        ↓
   Types IP address
        ↓
   ESP32 Web Server
        ↓
   Receives ON/OFF request
        ↓
   GPIO pin goes HIGH/LOW
        ↓
   LED turns ON/OFF
```

---

## What I Learned

- What ESP32 is and how it differs from Arduino
- How to configure Arduino IDE for ESP32
- What a web server is and how ESP32 can host one
- How GPIO pins control output devices like LEDs
- How IoT devices can be controlled wirelessly from a browser
- The concept of IP addresses in a local network

---

## Pics

[ESP32 LED Toggle Video](pics/LED_light_toggle.mp4)

---

## Conclusion

Through this task I learned how to use ESP32 to create a standalone web
server that controls a physical LED wirelessly from a browser. This is
a fundamental concept in IoT where physical devices are controlled
over a network. The ESP32's built in WiFi makes it far more capable
than Arduino for connected projects and smart home applications.

---

*Report by: Prajwal Dhannur*