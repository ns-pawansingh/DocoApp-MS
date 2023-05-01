package com.doco.bean;

import java.util.Map;

public class Medicine {

    private int id;
    private String name;
    private Map<String, String> compositions;
    private String type;
    private String manufacturer;

    public Medicine(int id, String name, String type, String manufacturer) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.manufacturer = manufacturer;
    }

    public Medicine(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public Medicine() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Map<String, String> getCompositions() {
        return compositions;
    }

    public void setCompositions(Map<String, String> compositions) {
        this.compositions = compositions;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getManufacturer() {
        return manufacturer;
    }

    public void setManufacturer(String manufacturer) {
        this.manufacturer = manufacturer;
    }
}
