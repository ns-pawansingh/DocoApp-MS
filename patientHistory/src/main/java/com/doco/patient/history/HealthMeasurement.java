package com.doco.patient.history;

public class HealthMeasurement {
    private String key;
    private String value;

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public String toString(){
        return "{\"key\":"+key+",\"value\":"+value+"}";
    }
}
