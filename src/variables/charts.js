export const barChartData = [
    {
        name: "فروش",
        data: [330, 250, 110, 300, 490, 350, 270, 130, 425],
    },
];

export const barChartOptions = {
    chart: {
        toolbar: {
            show: false,
        },
        fontFamily: "estedad"
    },
    tooltip: {
        style: {
            backgroundColor: "red",
            fontSize: "12px",
        },
        onDatasetHover: {
            style: {
                backgroundColor: "red",
                fontSize: "12px",
            },
        },
        theme: "dark",
    },
    xaxis: {
        categories: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر"],
        show: false,
        labels: {
            show: false,
            style: {
                colors: "#fff",
                fontSize: "12px",
            },
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    yaxis: {
        show: true,
        color: "#fff",
        labels: {
            show: true,
            style: {
                colors: "#fff",
                fontSize: "14px",
            },
            padding: "0px"
        },
    },
    grid: {
        show: false,
    },
    fill: {
        colors: "#fff",
    },
    dataLabels: {
        enabled: false,
    },
    plotOptions: {
        bar: {
            borderRadius: 8,
            columnWidth: "12px",
        },
    },
    responsive: [
        {
            breakpoint: 768,
            options: {
                plotOptions: {
                    bar: {
                        borderRadius: 0,
                    },
                },
            },
        },
    ],
};

export const lineChartData = [
    {
        name: "نرم‌افزارهای موبایلی",
        data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
    },
    {
        name: "وبسایت‌ها",
        data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
    },
];

export const lineChartOptions = {
    chart: {
        toolbar: {
            show: false,
        },
        fontFamily: "estedad"
    },
    tooltip: {
        theme: "dark",
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: "smooth",
    },
    xaxis: {
        type: "datetime",
        categories: [
            "فروردین",
            "اردیبهشت",
            "خرداد",
            "تیر",
            "مرداد",
            "شهریور",
            "مهر",
            "آبان",
            "آذر",
            "دی",
            "بهمن",
            "اسفند",
        ],
        labels: {
            style: {
                colors: "#c8cfca",
                fontSize: "12px",
            },
        },
    },
    yaxis: {
        labels: {
            style: {
                colors: "#c8cfca",
                fontSize: "12px",
            },
        },
    },
    legend: {
        show: false,
    },
    grid: {
        strokeDashArray: 5,
    },
    fill: {
        type: "gradient",
        gradient: {
            shade: "light",
            type: "vertical",
            shadeIntensity: 0.5,
            gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
            inverseColors: true,
            opacityFrom: 0.8,
            opacityTo: 0,
            stops: [],
        },
        colors: ["#4FD1C5", "#2D3748"],
    },
    colors: ["#4FD1C5", "#2D3748"],
};
