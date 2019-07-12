const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
  next();
})

app.post("/api/policies", (req, res, next) => {
  const policy = req.body;
  console.log(policy);
  res.status(201).json({
    message: 'Policy added successfully'
  });
})

app.get('/api/policies', (req, res, next) => {
  const policies = [
    { id: 'uewrjfk82174',
      policyName: 'Jeevan Saral',
      policyNumber: '3746171346',
      premiumAmount: 36551,
      premiumMode: 'HLY',
      sumAssured: 800000,
      bonusAccrued: 123456,
      startDate: new Date(),
      endDate: new Date(),
      policyTerm: 25,
      agentName: 'abcxyz',
      branchName: 'kolkata',
      nextDueDate: new Date(),
      premiumPaid: 'paid',
      agentPhone: '812364'
    },
    { id: 'uewrjfk82174',
      policyName: 'Jeevan Tarang',
      policyNumber: '3746171346',
      premiumAmount: 30871,
      premiumMode: 'HLY',
      sumAssured: 1500000,
      bonusAccrued: 12345678,
      startDate: new Date(),
      endDate: new Date(),
      policyTerm: 25,
      agentName: 'abcxyz',
      branchName: 'kolkata',
      nextDueDate: new Date(),
      premiumPaid: 'paid',
      agentPhone: '812364'
    }
  ];
  res.status(200).json({
    message: 'Policies fetched successfully',
    policies: policies
  });
});

module.exports = app;