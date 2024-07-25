import { table, removeTable, saveToStorage, viewTable, editTable } from "../data/table.js";

const addBtn = document.querySelector('.add-button');
const backDrop = document.querySelector('.backdrop');
const addModal = document.querySelector('.add-modal-container');
const closeAddBtn = document.querySelector('.close-add-btn');
const confirmAddBtn = document.querySelector('.confirm-add-btn');
const modal = document.querySelector('.modal');

/// Add modal show
addBtn.addEventListener('click', () => {
    openModal(backDrop, addModal);

    closeAddBtn.addEventListener('click', () => {
        closeModal(backDrop, addModal);
    });
});

confirmAddBtn.addEventListener('click' || 'Enter', () => {
    const name = document.querySelector('#add-name').value;
    const lastName = document.querySelector('#add-last-name').value;
    const code = document.querySelector('#add-code').value;

    addInformation(name, lastName, code);
});



/// Upadte table html code and show it on page
export function showTable(table) {
    let tableRowInformation =  ``;

    table.forEach( (information) => {
    
        tableRowInformation += `
        <tr class="table-detail-row table-detail-row-${information.code}" bgcolor="#439775" align="center">
            <td>${information.id}</td>
            <td class="name-cell-${information.code}">${information.name}</td>
            <td class="last-name-cell-${information.code}">${information.lastName}</td>
            <td class="name-code-${information.code}">${information.code}</td>
            <td class="button-rows">
                <button class="vision-btn vision-btn-${information.code}"
                data-info-id=${information.code}>
                    <svg class="vision-svg" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0001 5.25C9.22586 5.25 6.79699 6.91121 5.12801 8.44832C4.28012 9.22922 3.59626 10.0078 3.12442 10.5906C2.88804 10.8825 2.70368 11.1268 2.57736 11.2997C2.51417 11.3862 2.46542 11.4549 2.43187 11.5029C2.41509 11.5269 2.4021 11.5457 2.393 11.559L2.38227 11.5747L2.37911 11.5794L2.10547 12.0132L2.37809 12.4191L2.37911 12.4206L2.38227 12.4253L2.393 12.441C2.4021 12.4543 2.41509 12.4731 2.43187 12.4971C2.46542 12.5451 2.51417 12.6138 2.57736 12.7003C2.70368 12.8732 2.88804 13.1175 3.12442 13.4094C3.59626 13.9922 4.28012 14.7708 5.12801 15.5517C6.79699 17.0888 9.22586 18.75 12.0001 18.75C14.7743 18.75 17.2031 17.0888 18.8721 15.5517C19.72 14.7708 20.4039 13.9922 20.8757 13.4094C21.1121 13.1175 21.2964 12.8732 21.4228 12.7003C21.4859 12.6138 21.5347 12.5451 21.5682 12.4971C21.585 12.4731 21.598 12.4543 21.6071 12.441L21.6178 12.4253L21.621 12.4206L21.6224 12.4186L21.9035 12L21.622 11.5809L21.621 11.5794L21.6178 11.5747L21.6071 11.559C21.598 11.5457 21.585 11.5269 21.5682 11.5029C21.5347 11.4549 21.4859 11.3862 21.4228 11.2997C21.2964 11.1268 21.1121 10.8825 20.8757 10.5906C20.4039 10.0078 19.72 9.22922 18.8721 8.44832C17.2031 6.91121 14.7743 5.25 12.0001 5.25ZM4.29022 12.4656C4.14684 12.2885 4.02478 12.1311 3.92575 12C4.02478 11.8689 4.14684 11.7115 4.29022 11.5344C4.72924 10.9922 5.36339 10.2708 6.14419 9.55168C7.73256 8.08879 9.80369 6.75 12.0001 6.75C14.1964 6.75 16.2676 8.08879 17.8559 9.55168C18.6367 10.2708 19.2709 10.9922 19.7099 11.5344C19.8533 11.7115 19.9753 11.8689 20.0744 12C19.9753 12.1311 19.8533 12.2885 19.7099 12.4656C19.2709 13.0078 18.6367 13.7292 17.8559 14.4483C16.2676 15.9112 14.1964 17.25 12.0001 17.25C9.80369 17.25 7.73256 15.9112 6.14419 14.4483C5.36339 13.7292 4.72924 13.0078 4.29022 12.4656ZM14.25 12C14.25 13.2426 13.2427 14.25 12 14.25C10.7574 14.25 9.75005 13.2426 9.75005 12C9.75005 10.7574 10.7574 9.75 12 9.75C13.2427 9.75 14.25 10.7574 14.25 12ZM15.75 12C15.75 14.0711 14.0711 15.75 12 15.75C9.92898 15.75 8.25005 14.0711 8.25005 12C8.25005 9.92893 9.92898 8.25 12 8.25C14.0711 8.25 15.75 9.92893 15.75 12Z" fill="#ffffff"></path> </g></svg>
                </button>
                <button class="edit-btn edit-btn-${information.code}"
                data-info-id=${information.code}>
                    <svg class="edit-svg" width="26px" height="26px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.8686 4.13134L14.1615 3.42423L14.1615 3.42423L14.8686 4.13134ZM7.81459 7.48152L8.08931 8.44304L7.81459 7.48152ZM5.57564 9.83884L6.55004 10.0637V10.0637L5.57564 9.83884ZM3 21L2.02561 20.7751C1.94808 21.1111 2.04909 21.4633 2.29289 21.7071C2.5367 21.9509 2.8889 22.0519 3.22486 21.9744L3 21ZM14.1611 18.4243L13.9363 17.4499L13.9363 17.4499L14.1611 18.4243ZM16.5185 16.1854L15.5569 15.9107L16.5185 16.1854ZM19.8686 9.13134L20.5757 9.83845V9.83845L19.8686 9.13134ZM19.8686 6.8686L19.1615 7.57571H19.1615L19.8686 6.8686ZM17.1314 4.13134L17.8385 3.42423V3.42423L17.1314 4.13134ZM20.5368 8.30899L19.5858 7.99997L20.5368 8.30899ZM20.5368 7.69095L19.5858 7.99997L20.5368 7.69095ZM15.4404 18.0251L15.9601 18.8794H15.9601L15.4404 18.0251ZM16.0539 17.4424L16.8804 18.0054L16.8804 18.0054L16.0539 17.4424ZM6.55756 7.94607L7.12056 8.77253L7.12056 8.77253L6.55756 7.94607ZM5.97487 8.55957L6.82922 9.07928L6.82922 9.07928L5.97487 8.55957ZM15.691 3.46313L15.382 2.51207L15.691 3.46313ZM16.309 3.46313L16.618 2.51207L16.618 2.51207L16.309 3.46313ZM9.14645 16.2676C9.53697 15.8771 9.53697 15.2439 9.14644 14.8534C8.75591 14.4629 8.12275 14.4629 7.73223 14.8534L9.14645 16.2676ZM10 14.5C10 14.7761 9.77614 15 9.5 15V17C10.8807 17 12 15.8807 12 14.5H10ZM9.5 15C9.22386 15 9 14.7761 9 14.5H7C7 15.8807 8.11929 17 9.5 17V15ZM9 14.5C9 14.2238 9.22386 14 9.5 14V12C8.11929 12 7 13.1193 7 14.5H9ZM9.5 14C9.77614 14 10 14.2238 10 14.5H12C12 13.1193 10.8807 12 9.5 12V14ZM14.1615 3.42423L12.2929 5.29286L13.7071 6.70708L15.5757 4.83845L14.1615 3.42423ZM12.7253 5.03845L7.53987 6.51999L8.08931 8.44304L13.2747 6.96149L12.7253 5.03845ZM4.60125 9.61398L2.02561 20.7751L3.97439 21.2248L6.55004 10.0637L4.60125 9.61398ZM3.22486 21.9744L14.386 19.3987L13.9363 17.4499L2.77514 20.0256L3.22486 21.9744ZM17.48 16.4601L18.9615 11.2747L17.0385 10.7252L15.5569 15.9107L17.48 16.4601ZM18.7071 11.7071L20.5757 9.83845L19.1615 8.42424L17.2929 10.2929L18.7071 11.7071ZM20.5757 6.16149L17.8385 3.42423L16.4243 4.83845L19.1615 7.57571L20.5757 6.16149ZM20.5757 9.83845C20.7621 9.65211 20.9449 9.47038 21.0858 9.30446C21.2342 9.12961 21.3938 8.90772 21.4879 8.618L19.5858 7.99997C19.6057 7.93858 19.6292 7.92986 19.5611 8.01011C19.4854 8.09928 19.3712 8.21456 19.1615 8.42424L20.5757 9.83845ZM19.1615 7.57571C19.3712 7.78538 19.4854 7.90066 19.5611 7.98984C19.6292 8.07008 19.6057 8.06136 19.5858 7.99997L21.4879 7.38194C21.3938 7.09222 21.2342 6.87033 21.0858 6.69548C20.9449 6.52957 20.7621 6.34783 20.5757 6.16149L19.1615 7.57571ZM21.4879 8.618C21.6184 8.21632 21.6184 7.78362 21.4879 7.38194L19.5858 7.99997V7.99997L21.4879 8.618ZM14.386 19.3987C14.988 19.2598 15.5141 19.1507 15.9601 18.8794L14.9207 17.1708C14.8157 17.2346 14.6727 17.28 13.9363 17.4499L14.386 19.3987ZM15.5569 15.9107C15.3493 16.6373 15.2966 16.7778 15.2274 16.8794L16.8804 18.0054C17.1743 17.574 17.3103 17.0541 17.48 16.4601L15.5569 15.9107ZM15.9601 18.8794C16.3257 18.6571 16.6395 18.359 16.8804 18.0054L15.2274 16.8794C15.1471 16.9973 15.0426 17.0966 14.9207 17.1708L15.9601 18.8794ZM7.53987 6.51999C6.94585 6.68971 6.426 6.82571 5.99457 7.11961L7.12056 8.77253C7.22213 8.70334 7.36263 8.65066 8.08931 8.44304L7.53987 6.51999ZM6.55004 10.0637C6.71998 9.32729 6.76535 9.18427 6.82922 9.07928L5.12053 8.03986C4.84922 8.48586 4.74017 9.01202 4.60125 9.61398L6.55004 10.0637ZM5.99457 7.11961C5.64092 7.36052 5.34291 7.67429 5.12053 8.03986L6.82922 9.07928C6.90334 8.95742 7.00268 8.85283 7.12056 8.77253L5.99457 7.11961ZM15.5757 4.83845C15.7854 4.62878 15.9007 4.51459 15.9899 4.43889C16.0701 4.37076 16.0614 4.39424 16 4.41418L15.382 2.51207C15.0922 2.60621 14.8704 2.76578 14.6955 2.91421C14.5296 3.05506 14.3479 3.2379 14.1615 3.42423L15.5757 4.83845ZM17.8385 3.42423C17.6521 3.23789 17.4704 3.05506 17.3045 2.91421C17.1296 2.76578 16.9078 2.60621 16.618 2.51207L16 4.41418C15.9386 4.39424 15.9299 4.37077 16.0101 4.43889C16.0993 4.51459 16.2146 4.62877 16.4243 4.83845L17.8385 3.42423ZM16 4.41418H16L16.618 2.51207C16.2163 2.38156 15.7837 2.38156 15.382 2.51207L16 4.41418ZM12.2929 6.70708L17.2929 11.7071L18.7071 10.2929L13.7071 5.29286L12.2929 6.70708ZM7.73223 14.8534L2.29289 20.2929L3.70711 21.7071L9.14645 16.2676L7.73223 14.8534Z" fill="#ffffff"></path> </g></svg>
                </button>
                <button class="delete-btn delete-btn-${information.code}">
                    <svg class="delete-svg" width="26px" height="26px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 12L14 16M14 12L10 16M18 6L17.1991 18.0129C17.129 19.065 17.0939 19.5911 16.8667 19.99C16.6666 20.3412 16.3648 20.6235 16.0011 20.7998C15.588 21 15.0607 21 14.0062 21H9.99377C8.93927 21 8.41202 21 7.99889 20.7998C7.63517 20.6235 7.33339 20.3412 7.13332 19.99C6.90607 19.5911 6.871 19.065 6.80086 18.0129L6 6M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </button>
            </td>
        </tr>
        `;
    });


document.querySelector('.table-info').innerHTML = tableRowInformation;
}

/// declaring functions
function openModal(back, modal) {
    back.style.display = 'initial';
    modal.style.display = 'flex';
}

export function closeModal(back, modal) {
    back.style.display = 'none';
    modal.style.display = 'none';
}

function addInformation(name, lastName, code) {

    if (name === '' || lastName === '' || code === '' ) {
        alert("لطفا فیلد هارا پر کنید");
    } else if (code.length > 10 || code.length < 10) {
        alert('کد ملی نامعتبر است');
    } else {
        table.push({
            id: table.length + 1,
            name,
            lastName,
            code
        });
        
        showTable(table);
        closeModal(backDrop, addModal);
        saveToStorage();
        location.reload();
    }
}


/// Search table function
function searchTable(value, data) {
    let filterData = [];

    for (let i = 0; i< data.length; i++) {
        const name = data[i].name;
        const lastName = data[i].lastName;
        const code = data[i].code;

        if (name.includes(value)) {
            filterData.push(data[i]);
        } else if (lastName.includes(value)) {
            filterData.push(data[i]);
        } else if (code.includes(value)) {
            filterData.push(data[i]);
        }

    }
    return filterData;

}



//// Search table 
const searchBtn = document.querySelector('.search-button');

searchBtn.addEventListener('click', () => {
    search();
});


function search() {
    const nameValue = document.querySelector('.search-name-input').value;
    const lastName = document.querySelector('.search-last-name-input').value;
    const code = document.querySelector('.search-code-input').value;
    let data;

    if (nameValue === '' && lastName === '' && code === '') {
        alert('لطفا فیلد مورد نیاز برای جستجو را پر کنید')
        location.reload();
    }

    if (nameValue) {
        data = searchTable(nameValue, table);
    }

    if (lastName) {
        data = searchTable(lastName, table);
    }

    if (code) {
        data = searchTable(code, table);
    }

    showTable(data);
}
/// Delet modal show
table.forEach( (information) => {
    const deleteBtn = document.querySelectorAll(`.delete-btn-${information.code}`);
    let deleteModal = ``;

    deleteBtn.forEach( (button) => {
        button.addEventListener('click', () => {
            deleteModal = `
                <div class="delete-modal-container">
                    <div class="upper-part">
                        <h2 class="delete-moda-txt">حذف</h2>
                    </div>
                    <div class="delete-content">
                        <h1 class="delete-question-txt">آیا رکورد حذف شود ؟</h1>
                        <button class="question-btn accept-delete-btn-${information.code}" data-info-id="${information.code}">بله</button>
                        <button class="question-btn ignore-delete-btn">خیر</button>
                    </div>
                </div>
            `;
            modal.innerHTML = deleteModal;
            openModal(backDrop, modal);
    
            /// make the delete modal interactive
            const acceptDelBtn = document.querySelector(`.accept-delete-btn-${information.code}`);
            const ignoreDelBtn = document.querySelector('.ignore-delete-btn');
    
            ignoreDelBtn.addEventListener('click', () => {
                closeModal(backDrop, modal);
            });
    
            acceptDelBtn.addEventListener('click', () => {
                const infoId = acceptDelBtn.dataset.infoId;
                const row = document.querySelector(`.table-detail-row-${infoId}`);
                row.remove();
                removeTable(infoId);
                closeModal(backDrop, modal);
                saveToStorage();
                location.reload();
                showTable(table);
            });
        });
    });

});


/// Edit modal show
table.forEach ( (information) => {
    const editBtn = document.querySelectorAll(`.edit-btn-${information.code}`);
    let editModal = ``;

    editBtn.forEach( (edit) => {
        edit.addEventListener('click', () => {
            editModal += `
            <div class="edit-modal-container">
                <div class="upper-part">
                    <h3 class="edit-txt">ویرایش</h3>
                    <button class="close-edit-btn">
                        <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8.00386 9.41816C7.61333 9.02763 7.61334 8.39447 8.00386 8.00395C8.39438 7.61342 9.02755 7.61342 9.41807 8.00395L12.0057 10.5916L14.5907 8.00657C14.9813 7.61605 15.6144 7.61605 16.0049 8.00657C16.3955 8.3971 16.3955 9.03026 16.0049 9.42079L13.4199 12.0058L16.0039 14.5897C16.3944 14.9803 16.3944 15.6134 16.0039 16.0039C15.6133 16.3945 14.9802 16.3945 14.5896 16.0039L12.0057 13.42L9.42097 16.0048C9.03045 16.3953 8.39728 16.3953 8.00676 16.0048C7.61624 15.6142 7.61624 14.9811 8.00676 14.5905L10.5915 12.0058L8.00386 9.41816Z" fill="#ffffff"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z" fill="#ffffff"></path> </g></svg>
                    </button>
                </div>
                <div class="content">
                    <div class="input-box">
                        <label for="name">نام</label>
                        <input class="search-inputs edit-name-input" type="text">
                    </div>
                    <div class="input-box">
                        <label for="last-name">نام خانوادگی</label>
                        <input class="search-inputs edit-last-name-input" type="text">
                    </div>
                    <div class="input-box">
                        <label for="national-code">کد ملی</label>
                        <input class="search-inputs edit-code-input" type="text">
                    </div>
                    <button class="confirm-edit-btn confirm-edit-btn-${information.code}
                    data-info-id=${information.code}">تایید</button>
                </div>
            </div>
        `;
        modal.innerHTML = editModal;
        openModal(backDrop, modal);

        /// make edit modal interactive
        const ignoreEditBtn = document.querySelector('.close-edit-btn');
        const acceptEditBtn = document.querySelector(`.confirm-edit-btn-${information.code}`);
        
        ignoreEditBtn.addEventListener('click', () => {
            closeModal(backDrop, modal);
        });

        acceptEditBtn.addEventListener('click', () => {
            const infoId = edit.dataset.infoId;
            const row = document.querySelector(`.table-detail-row-${infoId}`);
            console.log(row);

            /// getting the new info input values
            const newName = document.querySelector('.edit-name-input').value;
            const newLastName = document.querySelector('.edit-last-name-input').value;
            const newCode = document.querySelector('.edit-code-input').value;

            editTable(newName, newLastName, newCode, infoId);
            location.reload();
            showTable(table);
        });
        });

    });
});


/// Vision modal show
table.forEach( (information) => {
    const visionBtn = document.querySelectorAll(`.vision-btn-${information.code}`);
    let visionModal = ``;

    visionBtn.forEach( (button) => {
        button.addEventListener('click', () => {
            visionModal = `
            <div class="vision-modal-container vision-modal-container-${information.code}">
                <div class="upper-part">
                    <h3 class="vision-txt">مشاهده</h3>
                    <button class="close-vision-btn">
                        <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8.00386 9.41816C7.61333 9.02763 7.61334 8.39447 8.00386 8.00395C8.39438 7.61342 9.02755 7.61342 9.41807 8.00395L12.0057 10.5916L14.5907 8.00657C14.9813 7.61605 15.6144 7.61605 16.0049 8.00657C16.3955 8.3971 16.3955 9.03026 16.0049 9.42079L13.4199 12.0058L16.0039 14.5897C16.3944 14.9803 16.3944 15.6134 16.0039 16.0039C15.6133 16.3945 14.9802 16.3945 14.5896 16.0039L12.0057 13.42L9.42097 16.0048C9.03045 16.3953 8.39728 16.3953 8.00676 16.0048C7.61624 15.6142 7.61624 14.9811 8.00676 14.5905L10.5915 12.0058L8.00386 9.41816Z" fill="#ffffff"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z" fill="#ffffff"></path> </g></svg>
                    </button>
                </div>
    
                <div class="vision-content">
                    <div class="vision-box">
                        <label for="name">نام:</label>
                        <h2 class="name-view"></h2>
                    </div>
                    <div class="vision-box">
                        <label for="lastName">نام خانوادگی: </label>
                        <h2 class="last-name-view"></h2>
                    </div>
                    <div class="vision-box">
                        <label for="code">کد ملی:</label>
                        <h2 class="code-view"></h2>
                    </div>
                </div>
            </div>
            `;
    
            modal.innerHTML = visionModal;
            openModal(backDrop, modal);

            const infoId = button.dataset.infoId;
            const view = viewTable(infoId);
            
            view.forEach( (info) => {
                document.querySelector('.name-view').innerHTML = info.name;
                document.querySelector('.last-name-view').innerHTML = info.lastName;
                document.querySelector('.code-view').innerHTML = info.code;
            });



            const closeVisionBtn = document.querySelector('.close-vision-btn');
            closeVisionBtn.addEventListener('click', () => {
                closeModal(backDrop, modal);
            });
        });

    });
});

