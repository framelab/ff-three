/**
 * FF Typescript Foundation Library
 * Copyright 2019 Ralph Wiedemeier, Frame Factory GmbH
 *
 * License: MIT
 */

import * as THREE from "three";

////////////////////////////////////////////////////////////////////////////////

export default class Loader
{
    static readonly assetType: string = "";
    static readonly extensions: string[] = [];

    get extensions() {
        return (this.constructor as typeof Loader).extensions;
    }
    get assetType() {
        return (this.constructor as typeof Loader).assetType;
    }

    constructor(loadingManager: THREE.LoadingManager)
    {
    }

    canLoad(path: string)
    {
        const extension = path.split(".").pop().toLowerCase();
        return this.extensions.indexOf(extension) >= 0;
    }

    async load(url: string): Promise<any>
    {
        return Promise.reject();
    }
}