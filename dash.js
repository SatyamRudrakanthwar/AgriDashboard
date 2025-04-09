document.addEventListener("DOMContentLoaded", function() {
    const ctx1 = document.getElementById('rhChart').getContext('2d');
    const ctx2 = document.getElementById('tempChart').getContext('2d');
    const ctx3 = document.getElementById('precChart').getContext('2d');
    
    const chartData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [{
            label: "Value",
            data: [30, 40, 35, 50, 45],
            borderColor: "#82ca9d",
            fill: false
        }]
    };
    
    new Chart(ctx1, { type: 'line', data: chartData });
    new Chart(ctx2, { type: 'line', data: chartData });
    new Chart(ctx3, { type: 'line', data: chartData });
});

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed"); // Debugging

    setTimeout(function() {
        const ctx = document.getElementById('colorMeterChart');
        if (!ctx) {
            console.error("Canvas element not found!");
            return;
        }

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Safe', 'Warning', 'Critical'],
                datasets: [{
                    label: 'Farm Condition Status',
                    data: [60, 30, 10], // Example values in percentage
                    backgroundColor: ['green', 'yellow', 'red'],
                    borderColor: ['darkgreen', 'darkgoldenrod', 'darkred'],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100
                    }
                }
            }
        });

        console.log("Chart has been initialized."); // Debugging
    }, 500);
});


