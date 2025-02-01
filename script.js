document.getElementById("paymentForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const service = document.getElementById("service").value;
    const accountNumber = document.getElementById("accountNumber").value;
    const amount = document.getElementById("amount").value;

    // Display results
    document.getElementById("serviceResult").textContent = service;
    document.getElementById("accountResult").textContent = accountNumber;
    document.getElementById("amountResult").textContent = parseFloat(amount).toLocaleString();

    // Show result section
    document.getElementById("result").classList.remove("hidden");
        
});  
document.addEventListener("DOMContentLoaded", function() { 
    let transactions = JSON.parse(localStorage.getItem("transactions")) || []; 
    let tbody = document.querySelector("tbody"); 

    transactions.forEach((trx, index) => { 
        let row = `<tr>
            <td>${index + 1}</td>
            <td>${trx.nomorHP}</td>
            <td>${trx.nominal}</td>
            <td>${trx.status}</td>
            <td>${trx.tanggal}</td>
        </tr>`; 

        tbody.innerHTML += row; 
    }); 
});
