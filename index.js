function superbowlWin(record) {
    const winYear = record.find((value) =>
        value.result === "W")
    if(winYear) {
        return winYear.year;
    }
    else {
        return (undefined);
    }
}
