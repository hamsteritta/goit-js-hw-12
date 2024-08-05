import { findImg } from './js/pixabay-api';
import { render } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import './css/styles.css';

const form = document.querySelector('#search');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const nextBtn = document.querySelector('.next-page');
const nextPageBox = document.querySelector('.next-page-box');

let page = 1;
let totalImg = 0;
let qTxt = '';

form.addEventListener('submit', runForm);
nextBtn.addEventListener('click', runNextBtn);

async function runForm(e) {
  e.preventDefault();
  qTxt = e.currentTarget.elements.searchQuery.value.toLowerCase();

  if (qTxt == '') {
      iziToast.error({
        title: 'Error',
        message: 'Please enter a search query!',
      });
    return;
  }  
  await startFind(true);
}

async function runNextBtn() {
  await startFind();
}

async function startFind(newFind = false) {
  try {
    loader.classList.add('loader-show');
    nextPageBox.classList.remove('next-page-show');
    
    if (newFind) {
      page = 1;
      totalImg = 0;
      gallery.innerHTML = '';
    } else {
      page++;
    }

    const data = await findImg(qTxt, page);
    if (data.hits.length == 0) {
      iziToast.info({
        title: 'Info',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    } else {
      totalImg += data.hits.length;
      render(data.hits);       

      const firstItem = document.querySelector('.gallery-item');
      if (firstItem) {
      window.scrollBy({
        top: firstItem.getBoundingClientRect().height * 2,
        behavior: 'smooth',
      });
    }

      if (data.totalHits <= totalImg) {
        iziToast.info({
          title: 'Info',
          message: "We're sorry, but you've reached the end of search results.",
        });
      } else {
        nextPageBox.classList.add('next-page-show');
      }
    }
  } catch (error) { 
    iziToast.error({
      title: 'Error',
      message: `Something went wrong: ${error.message}`,
    });
  } finally {
    loader.classList.remove('loader-show');
  }
  
}