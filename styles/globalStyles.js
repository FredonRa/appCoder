export const colors = {
    principal: "#700B97",
    title: "#FEE440",
    prioridad: [
        {
            backgroundColor: "#CEF5EB",
            color: "#1C7947"
        },
        {
            backgroundColor: "#FFDCC8",
            color: "#FF7800"
        },
        {
            backgroundColor: "#FFD0D0",
            color: "#FF5C58"
        }
    ]
}

export const globalStyles = {
    container: {
        flex: 1,
        backgroundColor: colors.principal,
        alignItems: "center",
        justifyContent: "flex-start",
        width: "100%",
        paddingTop: 40,
    },
    titleText: {
        color: colors.title,
        fontWeight: "600",
        fontSize: 26,
        marginTop: 40
    },
}

