import {formatDistance} from 'date-fns';
import {es} from 'date-fns/locale';

function formatDate(dateString) {
  return formatDistance(Date.parse(dateString), new Date(), {
    includeSeconds: true,
    addSuffix: true,
    locale: es,
  });
}

export {formatDate};
