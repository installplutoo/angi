document.addEventListener('DOMContentLoaded', () => {
    const copyDiv = document.getElementById('copy');
    copyDiv.addEventListener('click', function() {
        const textToCopy = this.textContent.trim();

        navigator.clipboard.writeText(textToCopy).then(() => {
         
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    });
});

const menuContainer = document.querySelector('.menu-container');
const menuItems = document.querySelectorAll('.menu-item');

let isStacked = false;




window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    isStacked = true;
    menuContainer.style.width = '6%'
    menuContainer.classList.add('stretch');

  } else if (window.scrollY === 0) { 
    isStacked = false;
    menuContainer.classList.remove('stacked');
    menuContainer.style.width = '22%';
    menuItems.style.display = 'flex';
  }

  // Update the class based on the 'isStacked' variable
  if (isStacked) {
    menuContainer.classList.add('stacked');
  } else {
    menuContainer.classList.remove('stacked');
  }
});

menuContainer.addEventListener('mouseenter', () => {
  if (isStacked) {
    menuContainer.classList.remove('stacked');
    menuContainer.style.width = '22%';
  }
});

menuContainer.addEventListener('mouseleave', () => {
  if (isStacked) {
    menuContainer.classList.add('stacked');
    menuContainer.style.width = '6%';
  }
});



const links = [
  'https://www.youtube.com/watch?v=j9uA_hs_y-4',
  'https://pump.fun/AkJNewpUKDHjfVSGSNMSxQa6JkugwGDxf5guPxwMpump',
  'https://t.me/+7o9RysS8DpszYTNh',
  'https://x.com/angicatsol'
];

menuItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    window.open(links[index], '_blank');
  });
});


document.getElementById('addy').addEventListener('click', function() {
    var popup = document.getElementById('popup');
    popup.style.display = 'block';
  
    setTimeout(function() {
      popup.style.display = 'none';
      
    }, 1000);
  });
  