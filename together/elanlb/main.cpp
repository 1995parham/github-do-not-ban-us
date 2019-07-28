#include <Arduino.h>

void setup ()
{
    Serial.begin(9600);
}

void loop ()
{
    Serial.println("GitHub is for everyone");
    delay(1000);
    Serial.println("GitHub es para todos");
    delay(1000);
}
