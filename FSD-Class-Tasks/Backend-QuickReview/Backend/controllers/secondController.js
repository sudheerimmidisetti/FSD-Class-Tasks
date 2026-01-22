const express = require('express')
const UserInfo = require('../model/secondModel')

const  AddData = async(requestAnimationFrame, res) => {
    try {
        console.log(req.body);
        const {Name, Email, Mobile, Age} = req.body;

        // Va;idations
        if (!Name || !Email || !Mobile || !Age) {
            
        }
    }
}