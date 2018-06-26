const express = require('express');
const router = express.Router();

const report = require('../controllers/controller');

router.post('/csp', report.createReport);
router.get('/csp', report.listAllReports);
router.get('/csp/distinct', report.findDistinctValues);
router.get('/csp/:domain', report.listAllReportsFromDomain)
router.get('/csp/today', report.findDistinctReportsByToday);
router.get('/csp/:domain/today', report.findDomainReportsByToday);
router.get('/csp/:domain/month', report.findDomainReportsByMonth);
router.get('/website', report.listAllWebsites);
router.post('/test', report.find);

router.get('/testdata', report.sendRequest);
/*router.get('/', (req, res, next) => {
    console.log('request');
    res.render('tableContent');
});

router.get('/chart', (req, res, next) => {
    console.log('request');
    res.render('chart');
});*/

module.exports = router;
