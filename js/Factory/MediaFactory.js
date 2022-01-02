'use strict';
/////////////////////////////////////////

import ImageFactory from './ImageFactory.js';
import VideoFactory from './VideoFactory.js';

export default class MediaFactory {// export default permet d'exporter une class, variable et/ou fonction en dehors du fichier avec le même nom
    // Check if the selected item is an image or a video
    renderMedia(element) {
        let factory = null;
        if (element.hasOwnProperty('image')) {
            factory = new ImageFactory();
        } else if (element.hasOwnProperty('video')) {
            factory = new VideoFactory();
        }
        return factory.createHTML(element);
    }
}
