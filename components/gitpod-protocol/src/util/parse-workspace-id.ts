/**
 * Copyright (c) 2020 Gitpod GmbH. All rights reserved.
 * Licensed under the GNU Affero General Public License (AGPL).
 * See License-AGPL.txt in the project root for license information.
 */


/**
 * Hostname may be of the form:
 *  - tight-moccasin-ferret-155799b3.ws-eu01.gitpod.io
 *  - 1234-tight-moccasin-ferret-155799b3.ws-eu01.gitpod.io
 *  - webview-1234-tight-moccasin-ferret-155799b3.ws-eu01.gitpod.io (or any other string replacing webview)
 * @param hostname The hostname the request is headed to
 */
export const parseWorkspaceIdFromHostname = function(hostname: string) {
    // We need to parse the workspace id precisely here to get the case '<some-str>-<port>-<wsid>.ws.' right
    const wsIdExpression = /([a-z]+\-)?([0-9]+\-)?(([a-z]+\-){3}[0-9a-z]{8})\.ws/g;
    const match = wsIdExpression.exec(hostname);
    if (match && match.length >= 2) {
        return match[3];
    } else {
        return undefined;
    }
}