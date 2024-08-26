"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerClasses = registerClasses;
const package_source_1 = require("../_dependencies/source/0x1/init");
const package_source_2 = require("../_dependencies/source/0x2/init");
const package_source_22fa05f21b1ad71442491220bb9338f7b7095fe35000ef88d5400d28523bdd93 = require("../_dependencies/source/0x22fa05f21b1ad71442491220bb9338f7b7095fe35000ef88d5400d28523bdd93/init");
const package_source_3 = require("../_dependencies/source/0x3/init");
const package_source_784e390ba69b497f2c8c6df0ca1e19009be2a51050d7d982986babeff019f15c = require("../_dependencies/source/0x784e390ba69b497f2c8c6df0ca1e19009be2a51050d7d982986babeff019f15c/init");
const package_source_9d843204839a48d5934e2dcc44f59dba2627dcb5feefe11db68f4a28f92a2c3 = require("../_dependencies/source/0x9d843204839a48d5934e2dcc44f59dba2627dcb5feefe11db68f4a28f92a2c3/init");
const package_source_ab3aac9c7c401a81cec5ded23dd2af41feb10f1df7af725bab7d519775caf56b = require("../_dependencies/source/0xab3aac9c7c401a81cec5ded23dd2af41feb10f1df7af725bab7d519775caf56b/init");
const package_source_cd90ced6aad00f4b3de0eacfbe65739d98d2500a0815b0828a760547983afe0 = require("../_dependencies/source/0xcd90ced6aad00f4b3de0eacfbe65739d98d2500a0815b0828a760547983afe0/init");
const package_source_de95a90163cfc2474c23284f8abe78dd602915dbc0b2a65452bf27c38d11392c = require("../_dependencies/source/0xde95a90163cfc2474c23284f8abe78dd602915dbc0b2a65452bf27c38d11392c/init");
const package_source_77855360f1230d599de98e888baeeb842ff9413103da31d09665bcf7dbc05bed = require("../degen-hive-two-token-amm/init");
function registerClassesSource(loader) {
    package_source_1.registerClasses(loader);
    package_source_2.registerClasses(loader);
    package_source_3.registerClasses(loader);
    package_source_9d843204839a48d5934e2dcc44f59dba2627dcb5feefe11db68f4a28f92a2c3.registerClasses(loader);
    package_source_cd90ced6aad00f4b3de0eacfbe65739d98d2500a0815b0828a760547983afe0.registerClasses(loader);
    package_source_22fa05f21b1ad71442491220bb9338f7b7095fe35000ef88d5400d28523bdd93.registerClasses(loader);
    package_source_77855360f1230d599de98e888baeeb842ff9413103da31d09665bcf7dbc05bed.registerClasses(loader);
    package_source_784e390ba69b497f2c8c6df0ca1e19009be2a51050d7d982986babeff019f15c.registerClasses(loader);
    package_source_ab3aac9c7c401a81cec5ded23dd2af41feb10f1df7af725bab7d519775caf56b.registerClasses(loader);
    package_source_de95a90163cfc2474c23284f8abe78dd602915dbc0b2a65452bf27c38d11392c.registerClasses(loader);
}
function registerClasses(loader) { registerClassesSource(loader); }
