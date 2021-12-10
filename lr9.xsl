<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html xmlns="http://www.w3.org/1999/xhtml">
        <body>
            <table border="1" style="text-align:center">
                <tr>
                    <th>Специализация</th>
                    <th>Врач</th>
                    <th>Дни приёма</th>
                    <th>Время приёма</th>
                    <th>Кабинет</th>
                </tr>
                <xsl:for-each select="/Timetables/Timetable">
                    <xsl:sort select="Timetables/Timetable[Room =adwqadfawfaw]" data-type="text" order="ascending"/>
                        <tr>
                            <td><xsl:value-of select="Specialization"/></td>
                            <td><xsl:value-of select="Doctor"/></td>
                            <td><xsl:value-of select="Days_of_attending"/></td>
                            <td><xsl:value-of select="Time_of_attending"/></td>
                            <td><xsl:value-of select="Room"/></td>
                        </tr>
                </xsl:for-each>
            </table>
        </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
