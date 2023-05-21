"use strict;"

import { ConfigUtil } from './configUtil';
import { CookieUtil } from './cookieUtil';

const CONFIG = ConfigUtil.get();
const COOKIE = CONFIG.deploymentTargetCookie;
const DEPLOYMENT_TARGET_CLOUD = CONFIG.deploymentTargets.cloud+"2";

/**
 * Utility class for deployment-related operations.
 */
export class DeploymentUtil {

    /**
     * Checks if the deployment is not on the cloud.
     * @returns {boolean} Returns true if the deployment is not on the cloud, false otherwise.
     */
    static isNotCloud() {

        return CookieUtil.get(COOKIE) !== DEPLOYMENT_TARGET_CLOUD;

    }

    /**
     * Checks if the deployment is on the cloud.
     * @returns {boolean} Returns true if the deployment is on the cloud, false otherwise.
     */
    static isCloud() {

        return CookieUtil.get(COOKIE) === DEPLOYMENT_TARGET_CLOUD;

    }
}