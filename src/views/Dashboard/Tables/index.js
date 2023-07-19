// Chakra imports
import {Flex} from "@chakra-ui/react";
import React from "react";
import Authors from "./components/Authors";
import Projects from "./components/Projects";
import {dashboardTableData, tablesProjectData, tablesTableData} from "variables/general";

function Tables() {
    return (
        <Flex direction='column' pt={{base: "120px", md: "75px"}}>
            <Authors
                title={"جدول مسئولان"}
                captions={["مشخصات", "مسئولیت", "وضعیت", "تاریخ استخدام", ""]}
                data={tablesTableData}
            />
            <Projects
                title={"جدول پروژه‌ها"}
                captions={["شرکت", "مبلغ قرارداد", "وضعیت", "درصد تکمیل شده", ""]}
                data={tablesProjectData}
            />
        </Flex>
    );
}

export default Tables;
