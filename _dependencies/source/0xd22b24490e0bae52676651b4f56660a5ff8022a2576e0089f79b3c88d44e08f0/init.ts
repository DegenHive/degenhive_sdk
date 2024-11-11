import * as domain from "./domain/structs";
import * as suinsRegistration from "./suins-registration/structs";
import * as suins from "./suins/structs";
import {StructClassLoader} from "../../../_framework/loader";

export function registerClasses(loader: StructClassLoader) { loader.register(domain.Domain);
loader.register(suinsRegistration.SuinsRegistration);
loader.register(suins.ConfigKey);
loader.register(suins.AdminCap);
loader.register(suins.AppKey);
loader.register(suins.RegistryKey);
loader.register(suins.SUINS);
loader.register(suins.SuiNS);
 }
