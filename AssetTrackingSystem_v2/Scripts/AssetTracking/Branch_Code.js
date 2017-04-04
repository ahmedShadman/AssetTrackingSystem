﻿

$(document).ready(function () {

    /* Automatic Code generation from organization and shortname field */
    $('#OrganizationId, #ShortName').change(function () {

        var organizationId = $('#OrganizationId').val();
        var branchShortName = $('#ShortName').val();

        var jsonData = { id: organizationId };
        $.ajax({
            url: '/Loader/GetOrganizationById?id=' + organizationId,
            contentType: 'application/json',
            data: JSON.stringify(jsonData),
            success: function (organization) {
                console.log(organization.Id);
                var Code = organization.ShortName + "_" + branchShortName;
                $('#Code').val(Code);
            }

        });
    });

    $('#Code').focus(function () {
        var organizationId = $('#OrganizationId').val();
        var branchShortName = $('#ShortName').val();

        var jsonData = { id: organizationId };
        $.ajax({
            url: '/Loader/GetOrganizationById?id=' + organizationId,
            contentType: 'application/json',
            data: JSON.stringify(jsonData),
            success: function (organization) {
                var Code = organization.ShortName + "_" + branchShortName;
                $('#Code').val(Code);
            }

        });
    });

    $('#ShortName').keyup(function () {
        var organizationId = $('#OrganizationId').val();
        var shortName = $('#ShortName').val();

        var jsonData = { id: organizationId };
        $.ajax({
            url: '/Loader/GetOrganizationById?id=' + organizationId,
            contentType: 'application/json',
            data: JSON.stringify(jsonData),
            success: function (organization) {

                $('#Code').val(organization.ShortName + "_" + shortName);
            }
            });
    });

});