const driver = {}
function updateDriverWithKeyAndValue(drivers, key, value){
    return Object.assign({}, drivers, { [key]: value });
}
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[key]=value;
    return driver;
}
function deleteFromDriverByKey(driver, key){
    const NEW = Object.assign({}, driver);
    delete NEW[key];
    return NEW;
}
function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key];
    return driver;
}