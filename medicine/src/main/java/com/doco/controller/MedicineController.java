package com.doco.controller;

import com.doco.Constant;
import com.doco.bean.Medicine;
import com.doco.service.MedicineServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("medicine")
public class MedicineController {
    @Autowired
    MedicineServiceImpl medicineService;

    @PostMapping("/save")
    public String addMedicine(@RequestBody Medicine medicine){
        medicineService.save(medicine);
        return Constant.CREATE_SUCCESS;
    }
    @GetMapping("/delete/{id}")
    public String delete(@PathVariable int id){
        medicineService.delete(id);
        return Constant.DELETE_SUCCESS;
    }
    @GetMapping("/all")
    public List<Medicine> readMedicines(){
        return medicineService.getAllMedicines();
    }
}
