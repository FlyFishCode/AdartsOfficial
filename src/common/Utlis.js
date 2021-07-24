import md5 from 'blueimp-md5'
// 正则 手机号
const REG_PHONE = /^(?:(?:\+|00)86)?1\d{10}$/;
// 正则 邮箱
const REG_EMAIL = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const MD5 = (value) => {
        return md5(value + 'kitekey').toUpperCase();
    }
    // 国家代码
const COUNTRYICONS = [
    "SR", "PE", "UY", "VE", "PY", "GY", "CO", "CL", "BR", "BO",
    "AR", "VU", "TV", "TO", "SB", "WS", "PG", "PW", "NZ", "NR",
    "FM", "MH", "KI", "FJ", "AU", "US", "TT", "VC", "LC", "KN",
    "NI", "MX", "JM", "HN", "HT", "GT", "GD", "SV", "DO", "DM",
    "CU", "CR", "CA", "BZ", "BB", "BS", "AG", "VA", "GB", "UA",
    "CH", "SE", "ES", "SI", "SK", "RS", "SM", "RO", "PT", "PL",
    "NO", "NL", "ME", "MC", "MD", "MT", "MK", "LU", "LT", "LI",
    "LV", "IT", "IE", "IS", "HU", "GR", "DE", "GE", "FR", "FI",
    "DK", "CZ", "CY", "HR", "BG", "BA", "BE", "BY", "AZ", "AT",
    "AM", "AD", "AL", "YE", "VN", "UZ", "AE", "TM", "TR", "TH",
    "TJ", "SY", "LK", "SG", "SA", "RU", "QA", "PH", "PK", "OM",
    "MN", "MV", "MY", "LB", "LA", "KG", "KW", "KR", "KP", "KZ",
    "JO", "JP", "IQ", "IR", "ID", "IN", "TL", "CN", "KH", "BN",
    "BT", "BD", "BH", "AF", "EG", "GQ", "DJ", "CG", "CD", "KM",
    "CF", "CV", "CM", "BI", "BF", "BW", "BJ", "AO", "DZ", "ZW",
    "ZM", "UG", "TN", "TG", "TZ", "SZ", "SD", "SS", "ZA", "SO",
    "SL", "SC", "SN", "ST", "RW", "NG", "NE", "NA", "MZ", "MA",
    "MU", "MR", "ML", "MW", "MG", "LY", "LR", "LS", "KE", "GN",
    "GW", "GH", "GM", "GA", "ET", "ER", "CI", "NP"
];
export {
    REG_PHONE,
    REG_EMAIL,
    MD5,
    COUNTRYICONS
}