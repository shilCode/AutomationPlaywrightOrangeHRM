import { expect } from "@playwright/test";
import { Locator, Page } from "playwright";

export class LeavePage{
    public readonly page:Page;
    public readonly header:Locator
    public readonly leaveHeader:Locator
    public readonly applyHeader:Locator
    public readonly applyLeaveFullView:Locator
    public readonly applyLeaveHeading:Locator
    public readonly applyLeaveBtn:Locator
    public readonly applyLeaveTypesStr:Locator
    public readonly applyLeaveTypesDropDown:Locator
    public readonly applyLeaveTypesDropDownOption:Locator
    public readonly applyLeaveCalenderStartDate:Locator
    public readonly applyLeaveCalenderEndDate:Locator
    public readonly applyLeaveCalenderView:Locator
    public readonly applyLeaveCalenderViewTodayStr:Locator
    public readonly applyLeaveCalenderViewCloseStr:Locator
    public readonly balanceInsufficient:Locator
    public readonly myLeave:Locator
    constructor(page:Page){
        this.page=page;
        this.header =page.locator('[class="oxd-topbar-body"]')
        this.leaveHeader=page.locator('[aria-label="Topbar Menu"]')
        this.applyHeader =this.header.locator('li').filter({ hasText: 'Apply' })
        this.applyLeaveFullView=page.locator('[class="orangehrm-card-container"]')
        this.applyLeaveHeading=this.applyLeaveFullView.getByRole('heading', { name: 'Apply Leave' })
        this.applyLeaveBtn=this.applyLeaveFullView.getByRole('button', { name: 'Apply' })
        this.applyLeaveTypesStr=this.applyLeaveFullView.locator('div').filter({ hasText: /^Leave Type$/ })
        this.applyLeaveTypesDropDown=this.applyLeaveFullView.locator('div').filter({ hasText: /^-- Select --$/ }).nth(2)
        this.applyLeaveTypesDropDownOption=this.applyLeaveFullView.getByRole('option', { name: 'US - Personal' })
        this.applyLeaveCalenderStartDate=this.applyLeaveFullView.getByPlaceholder('yyyy-dd-mm').first()
        this.applyLeaveCalenderEndDate=this.applyLeaveFullView.getByPlaceholder('yyyy-dd-mm').last()
        this.applyLeaveCalenderView=page.locator('[class*="oxd-date-input-calendar"]')
        this.applyLeaveCalenderViewTodayStr=this.applyLeaveCalenderView.getByText('Today')
        this.applyLeaveCalenderViewCloseStr=this.applyLeaveCalenderView.getByText('Close')
        this.balanceInsufficient=page.getByText('Balance not sufficient')
        this.myLeave=this.leaveHeader.getByRole('link', { name: 'My Leave' })
    }

    async resetMyLeave(){
        await expect(this.page.locator('[class="oxd-table-filter"]').getByRole('heading', { name: 'My Leave List' })).toContainText('My Leave List')
        await this.page.locator('[class="oxd-table-filter"]').getByRole('button', { name: 'Reset' }).click()
        await expect(this.page.locator('[class="oxd-toast-content oxd-toast-content--info"]')).toContainText('')
        expect(this.page.locator('[class="orangehrm-paper-container"]').getByText('No Records Found')).toMatch(/No Records Found/)

    }
} 