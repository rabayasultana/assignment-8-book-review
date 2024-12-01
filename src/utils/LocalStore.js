


export const saveToLocal = (data) => {
    
    const savedData = JSON.parse(localStorage.getItem("read")) || [];
    const isExist = savedData.find((item) => item.bookId == data.bookId);
    if(!isExist){
        
        savedData.push(data);
        localStorage.setItem("read", JSON.stringify(savedData));
        alert('Book Added to read-list');
    }
    else{
        alert("Already exist in read-list");
    }

    
    
}