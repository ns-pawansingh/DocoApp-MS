package com.doco.patient.controller;

import com.doco.patient.Constant;
import com.doco.patient.model.APIFormat;
import com.doco.patient.model.PatientDetail;
import com.doco.patient.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("patient")
public class PatientController {
    @Autowired
    private PatientService patientService;

    @GetMapping("/api/info")
    public List<APIFormat> getAPIDetails() {
        return allAPIs();
    }

    @GetMapping("/all")
    public List<PatientDetail> getAllPatient() {
        return patientService.getAllPatient();
    }

    @GetMapping("/name/{name}")
    public List<PatientDetail> getPatientsByName(@PathVariable String name) {
        return patientService.getPatientByName(name);
    }



    @GetMapping("/{id}")
    public PatientDetail getPatient(@PathVariable Long id) {
        return patientService.getPatient(id);
    }

    @PostMapping("/update")
    public String update(@RequestBody PatientDetail patientDetail) {
        patientService.update(patientDetail);
        return Constant.UPDATE_SUCCESS;
    }

    @PostMapping("/save")
    public String save(@RequestBody PatientDetail patientDetail) {
        patientService.save(patientDetail);
        return Constant.CREATE_SUCCESS;
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable Long id) {
        patientService.delete(id);
        return Constant.DELETE_SUCCESS;
    }


    private List<APIFormat> allAPIs(){
        return Arrays.asList(new APIFormat("patient/all", null, "GET"),
                new APIFormat("patient/{id}",null, "GET"),
                new APIFormat("patient/name/{name}", null, "GET"),
                new APIFormat("patient/save", new PatientDetail(), "POST"),
                new APIFormat("patient/{id}", null, "DELETE"));
    }
}
