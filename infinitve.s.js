let page = 1;
const last_page = 10;
const pixel_offset = 200;
const throttle = (callBack, delay) => {
    let withinInterval;
    return function () {
        const args = arguments;
        const context = this;
        if (!withinInterval) {
            callBack.call(context, args);
            withinInterval = true;
            setTimeout(() => (withinInterval = false), delay);
        }
    };
};

const httpRequestWrapper = (method, URL) => {
    return new Promise((resolve, reject) => {
        const xhr_obj = new XMLHttpRequest();
        xhr_obj.responseType = "json";
        xhr_obj.open(method, URL);
        xhr_obj.onload = () => {
            const data = xhr_obj.response;
            resolve(data);
        };
        xhr_obj.onerror = () => {
            reject("failed");
        };
        xhr_obj.send();
    });
};

const getData = async (page_no = 1) => {
    const data = await httpRequestWrapper(
        "GET",
        `https://randomuser.me/api/?page=${page_no}&results=10`
    );

    const { results } = data;
    populateUI(results);
};

let handleLoad;

let trottleHandler = () => { throttle(handleLoad.call(this), 1000) };

document.addEventListener("DOMContentLoaded", () => {
    getData(1);
    window.addEventListener("scroll", trottleHandler);
});

handleLoad = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - pixel_offset) {
        page = page + 1;
        if (page <= last_page) {
            window.removeEventListener('scroll', trottleHandler)
            getData(page)
                .then((_res) => {
                    window.addEventListener('scroll', trottleHandler)
                })
        }
    }
}


const populateUI = data => {
    const container = document.querySelector('.whole_wrapper');
    data &&
        data.length &&
        data
            .map((each, index) => {
                const { name, email, picture } = each;
                const { first } = name;
                const { large } = picture;
                container.innerHTML +=
                    `
    <div class="each_card">
      <div class="image_container">
        <img src="${large}" alt="" />
      </div>
      <div class="right_contents_container">
        <div class="name_field">${first}</div>
        <div class="email_filed">${email}</div>
      </div>
    </div>
    
    `
            })

}