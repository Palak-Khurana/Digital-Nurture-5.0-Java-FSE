package com.cognizant.spring_learn.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.spring_learn.model.Country;
import com.cognizant.spring_learn.util.CountryUtil;

@Service
public class CountryService {

    @Autowired
    private CountryUtil countryUtil;

    public Country getCountry(String code) {

        List<Country> countries = countryUtil.getCountryList();

        for (Country country : countries) {
            if (country.getCode().equalsIgnoreCase(code)) {
                return country;
            }
        }

        return null;
    }
}