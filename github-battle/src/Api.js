import Axios from 'axios';

function CallUrl(updateItemsCallback, url)
{
    console.log('CallUrl');
    Axios.get(url)
    .then((response) => {
      console.log('Axios.response.data');
      console.log(response.data);
      updateItemsCallback(response.data.items)
    })
    .catch(function(error)
    {
      console.log('CallUrl', error);
    });
}

export const AllLanguage = (updateItemsCallback) => {
    console.log('All call');
    CallUrl(updateItemsCallback, 'https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc&type=Repositories')
}

export const SingleLanguage = (updateItemsCallback, language) => {
    console.log('SingleLanguage call');
    CallUrl(updateItemsCallback, `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`)
}
