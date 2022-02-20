const formatProviderText = require("../../public/js/formatProviderText");

test("Formats provider text to be presented on page.", () => {
    expect(formatProviderText("the-wall-street-journal")).toBe("the wall street journal");
});

test("Formats provider text to be presented on page.", () => {
    expect(formatProviderText("reuters")).toBe("reuters");
});

test("Formats provider text to be presented on page.", () => {
    expect(formatProviderText("bbc-news")).toBe("BBC news");
});

test("Formats provider text to be presented on page.", () => {
    expect(formatProviderText("al-jazeera-english")).toBe("al jazeera");
});

test("Formats provider text to be presented on page.", () => {
    expect(formatProviderText("bleacher-report")).toBe("bleacher report");
});

test("Formats provider text to be presented on page.", () => {
    expect(formatProviderText("espn")).toBe("ESPN");
});

test("Formats provider text to be presented on page.", () => {
    expect(formatProviderText("techcrunch")).toBe("techCrunch");
});

test("Formats provider text to be presented on page.", () => {
    expect(formatProviderText("wired")).toBe("wired");
});
