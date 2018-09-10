$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/EnrollmentInquiryForm.feature");
formatter.feature({
  "name": "EnrollmentInquiryForm",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "catching unexpected actions while filling the form",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@temp"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User get EnrollmentInquiryForm page",
  "keyword": "Given "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_get_EnrollmentInquiryForm_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see unchecked radio button",
  "keyword": "Then "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_should_see_unchecked_radio_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "see all unfilled page for student information",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@temp"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User get EnrollmentInquiryForm page",
  "keyword": "Given "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_get_EnrollmentInquiryForm_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User accept admission procesure",
  "keyword": "When "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_accept_admission_procesure()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the next button",
  "keyword": "And "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_click_the_next_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see all fields are unfilled",
  "keyword": "Then "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_should_see_all_fields_are_unfilled()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat stepDefinitions.EnrollmentInquiryFormStepDefs.user_should_see_all_fields_are_unfilled(EnrollmentInquiryFormStepDefs.java:180)\r\n\tat ✽.user should see all fields are unfilled(src/test/resources/features/EnrollmentInquiryForm.feature:37)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "check auto selected education year is 2018",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@temp"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User get EnrollmentInquiryForm page",
  "keyword": "Given "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_get_EnrollmentInquiryForm_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User accept admission procesure",
  "keyword": "When "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_accept_admission_procesure()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the next button",
  "keyword": "And "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_click_the_next_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the OK button on warning alert",
  "keyword": "And "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_click_the_OK_button_on_warning_alert()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//td[@class\u003d\u0027buttonRounded\u0027]\"}\n  (Session info: chrome\u003d69.0.3497.81)\n  (Driver info: chromedriver\u003d2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027DESKTOP-EHU3RRA\u0027, ip: \u0027192.168.0.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00279.0.4\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.41.578737 (49da6702b16031..., userDataDir: C:\\Users\\Asus\\AppData\\Local...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:60406}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 69.0.3497.81, webStorageEnabled: true}\nSession ID: b190be8e1ba4737d4c15304d71568774\n*** Element info: {Using\u003dxpath, value\u003d//td[@class\u003d\u0027buttonRounded\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:419)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat stepDefinitions.EnrollmentInquiryFormStepDefs.user_click_the_OK_button_on_warning_alert(EnrollmentInquiryFormStepDefs.java:75)\r\n\tat ✽.User click the OK button on warning alert(src/test/resources/features/EnrollmentInquiryForm.feature:43)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user should see auto selected education year is 2018",
  "keyword": "Then "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_should_see_auto_selected_education_year_is(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Application should not accept unreasonable grade +3 or -3",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@temp"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User get EnrollmentInquiryForm page",
  "keyword": "Given "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_get_EnrollmentInquiryForm_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User accept admission procesure",
  "keyword": "When "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_accept_admission_procesure()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the next button",
  "keyword": "And "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_click_the_next_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill all parent information form",
  "keyword": "And "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_fill_all_parent_information_form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the OK button on warning alert",
  "keyword": "And "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_click_the_OK_button_on_warning_alert()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//td[@class\u003d\u0027buttonRounded\u0027]\"}\n  (Session info: chrome\u003d69.0.3497.81)\n  (Driver info: chromedriver\u003d2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027DESKTOP-EHU3RRA\u0027, ip: \u0027192.168.0.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00279.0.4\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.41.578737 (49da6702b16031..., userDataDir: C:\\Users\\Asus\\AppData\\Local...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:60473}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 69.0.3497.81, webStorageEnabled: true}\nSession ID: 86a85d7837b11084a65d0d3f62b2abd4\n*** Element info: {Using\u003dxpath, value\u003d//td[@class\u003d\u0027buttonRounded\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:419)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat stepDefinitions.EnrollmentInquiryFormStepDefs.user_click_the_OK_button_on_warning_alert(EnrollmentInquiryFormStepDefs.java:75)\r\n\tat ✽.User click the OK button on warning alert(src/test/resources/features/EnrollmentInquiryForm.feature:51)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User fill all student information form",
  "keyword": "And "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_fill_all_student_information_form()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user select unreasonable grade more than +4-4 years",
  "keyword": "And "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_select_unreasonable_grade_more_than_years(Integer,Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should not pass the current page",
  "keyword": "Then "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_should_not_pass_the_current_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Complete registiration EnrollmentInquiryForm succesfully",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@temp"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User get EnrollmentInquiryForm page",
  "keyword": "Given "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_get_EnrollmentInquiryForm_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User accept admission procesure",
  "keyword": "When "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_accept_admission_procesure()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the next button",
  "keyword": "And "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_click_the_next_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill all parent information form",
  "keyword": "When "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_fill_all_parent_information_form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the next button",
  "keyword": "And "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_click_the_next_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the OK button on warning alert",
  "keyword": "And "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_click_the_OK_button_on_warning_alert()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill all student information form",
  "keyword": "When "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_fill_all_student_information_form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the next button",
  "keyword": "And "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_click_the_next_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see unselected radio button for school",
  "keyword": "Then "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_should_see_unselected_radio_button_for_school()"
});
formatter.result({
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat stepDefinitions.EnrollmentInquiryFormStepDefs.user_should_see_unselected_radio_button_for_school(EnrollmentInquiryFormStepDefs.java:207)\r\n\tat ✽.user should see unselected radio button for school(src/test/resources/features/EnrollmentInquiryForm.feature:65)\r\n",
  "status": "pending"
});
formatter.step({
  "name": "User click the next button",
  "keyword": "When "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_click_the_next_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see warning alert",
  "keyword": "Then "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_should_see_warning_alert()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});